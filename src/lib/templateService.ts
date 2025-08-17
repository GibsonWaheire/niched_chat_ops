const API_BASE_URL = 'http://localhost:3001';

export interface CustomTemplateRequest {
  id?: number;
  businessName: string;
  industry: string;
  contactName: string;
  email: string;
  phone: string;
  businessSize: string;
  currentProcesses: string;
  automationNeeds: string[];
  timeline: string;
  additionalInfo: string;
  status?: 'pending' | 'reviewing' | 'in_progress' | 'completed' | 'cancelled';
  createdAt?: string;
  assignedTo?: string | null;
  estimatedCompletion?: string | null;
}

export class TemplateService {
  static async submitCustomTemplateRequest(request: CustomTemplateRequest): Promise<CustomTemplateRequest> {
    try {
      const response = await fetch(`${API_BASE_URL}/customTemplateRequests`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...request,
          status: 'pending',
          createdAt: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit template request');
      }

      return await response.json();
    } catch (error) {
      console.error('Error submitting template request:', error);
      throw new Error('Failed to submit template request. Please try again.');
    }
  }

  static async getCustomTemplateRequests(): Promise<CustomTemplateRequest[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/customTemplateRequests`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch template requests');
      }

      return await response.json();
    } catch (error) {
      console.error('Error fetching template requests:', error);
      throw new Error('Failed to fetch template requests');
    }
  }

  static async getCustomTemplateRequestById(id: number): Promise<CustomTemplateRequest> {
    try {
      const response = await fetch(`${API_BASE_URL}/customTemplateRequests/${id}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch template request');
      }

      return await response.json();
    } catch (error) {
      console.error('Error fetching template request:', error);
      throw new Error('Failed to fetch template request');
    }
  }

  static async updateCustomTemplateRequest(id: number, updates: Partial<CustomTemplateRequest>): Promise<CustomTemplateRequest> {
    try {
      const response = await fetch(`${API_BASE_URL}/customTemplateRequests/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updates),
      });

      if (!response.ok) {
        throw new Error('Failed to update template request');
      }

      return await response.json();
    } catch (error) {
      console.error('Error updating template request:', error);
      throw new Error('Failed to update template request');
    }
  }

  static async deleteCustomTemplateRequest(id: number): Promise<void> {
    try {
      const response = await fetch(`${API_BASE_URL}/customTemplateRequests/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete template request');
      }
    } catch (error) {
      console.error('Error deleting template request:', error);
      throw new Error('Failed to delete template request');
    }
  }

  // Get industry statistics for analytics
  static async getIndustryStats(): Promise<Record<string, number>> {
    try {
      const requests = await this.getCustomTemplateRequests();
      const stats: Record<string, number> = {};
      
      requests.forEach(request => {
        stats[request.industry] = (stats[request.industry] || 0) + 1;
      });
      
      return stats;
    } catch (error) {
      console.error('Error getting industry stats:', error);
      return {};
    }
  }

  // Get automation needs statistics
  static async getAutomationNeedsStats(): Promise<Record<string, number>> {
    try {
      const requests = await this.getCustomTemplateRequests();
      const stats: Record<string, number> = {};
      
      requests.forEach(request => {
        request.automationNeeds.forEach(need => {
          stats[need] = (stats[need] || 0) + 1;
        });
      });
      
      return stats;
    } catch (error) {
      console.error('Error getting automation needs stats:', error);
      return {};
    }
  }
}
